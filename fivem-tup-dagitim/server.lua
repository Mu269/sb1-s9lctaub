local playerJobs = {}

local function randomPayment()
    return math.random(Config.Payment.min, Config.Payment.max)
end

RegisterNetEvent('tupdagitim:server:startJob', function()
    local src = source
    playerJobs[src] = {
        active = true,
        delivered = 0,
        carrying = 0
    }

    TriggerClientEvent('tupdagitim:client:jobStarted', src)
end)

RegisterNetEvent('tupdagitim:server:takeTube', function()
    local src = source
    local state = playerJobs[src]

    if not state or not state.active then
        TriggerClientEvent('tupdagitim:client:notify', src, 'Önce işe başlamalısın.')
        return
    end

    if state.carrying >= Config.MaxCarry then
        TriggerClientEvent('tupdagitim:client:notify', src, ('En fazla %s tüp taşıyabilirsin.'):format(Config.MaxCarry))
        return
    end

    state.carrying = state.carrying + 1
    TriggerClientEvent('tupdagitim:client:updateCarry', src, state.carrying)
    TriggerClientEvent('tupdagitim:client:notify', src, ('Tüp alındı (%s/%s).'):format(state.carrying, Config.MaxCarry))
end)

RegisterNetEvent('tupdagitim:server:deliverTube', function()
    local src = source
    local state = playerJobs[src]

    if not state or not state.active then
        TriggerClientEvent('tupdagitim:client:notify', src, 'Önce işe başlamalısın.')
        return
    end

    if state.carrying <= 0 then
        TriggerClientEvent('tupdagitim:client:notify', src, 'Teslim etmek için üzerinde tüp yok.')
        return
    end

    state.carrying = state.carrying - 1
    state.delivered = state.delivered + 1

    local reward = randomPayment()

    -- Burayı kullandığın framework'e göre değiştir:
    -- ESX örneği: xPlayer.addMoney(reward)
    -- QBCore örneği: Player.Functions.AddMoney('cash', reward)

    TriggerClientEvent('tupdagitim:client:updateCarry', src, state.carrying)
    TriggerClientEvent('tupdagitim:client:notify', src, ('Teslimat tamamlandı. +$%s'):format(reward))
end)

RegisterNetEvent('tupdagitim:server:stopJob', function()
    local src = source
    local state = playerJobs[src]

    if not state or not state.active then
        TriggerClientEvent('tupdagitim:client:notify', src, 'Aktif bir işin yok.')
        return
    end

    local delivered = state.delivered
    playerJobs[src] = nil

    TriggerClientEvent('tupdagitim:client:jobStopped', src)
    TriggerClientEvent('tupdagitim:client:notify', src, ('Mesai bitti. Toplam teslimat: %s'):format(delivered))
end)

AddEventHandler('playerDropped', function()
    playerJobs[source] = nil
end)
