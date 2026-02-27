local jobActive = false
local carrying = 0
local currentDrop = nil
local blip = nil

local function notify(msg)
    SetNotificationTextEntry('STRING')
    AddTextComponentString(msg)
    DrawNotification(false, false)
end

local function drawText3D(coords, text)
    local x, y, z = table.unpack(coords)
    SetTextScale(0.30, 0.30)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry('STRING')
    SetTextCentre(true)
    AddTextComponentString(text)
    SetDrawOrigin(x, y, z + 1.0, 0)
    DrawText(0.0, 0.0)
    ClearDrawOrigin()
end

local function ensureDropPoint()
    if not currentDrop then
        currentDrop = Config.DropPoints[math.random(1, #Config.DropPoints)]
    end
end

local function setJobBlip()
    local c = Config.StartPoint
    local b = AddBlipForCoord(c.x, c.y, c.z)
    SetBlipSprite(b, Config.Blip.sprite)
    SetBlipDisplay(b, 4)
    SetBlipScale(b, Config.Blip.scale)
    SetBlipColour(b, Config.Blip.color)
    SetBlipAsShortRange(b, true)
    BeginTextCommandSetBlipName('STRING')
    AddTextComponentString(Config.Blip.name)
    EndTextCommandSetBlipName(b)
    blip = b
end

CreateThread(function()
    setJobBlip()

    while true do
        Wait(0)

        local ped = PlayerPedId()
        local pCoords = GetEntityCoords(ped)

        -- Başlangıç noktası
        local distToStart = #(pCoords - Config.StartPoint)
        if distToStart < Config.MarkerDrawDistance then
            DrawMarker(2, Config.StartPoint.x, Config.StartPoint.y, Config.StartPoint.z + 0.2, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.4, 0.4, 0.4, 52, 152, 219, 155, false, true, 2, nil, nil, false)
        end

        if distToStart < Config.InteractDistance then
            if not jobActive then
                drawText3D(Config.StartPoint, '[E] Tüp dağıtım işine başla')
                if IsControlJustReleased(0, 38) then
                    TriggerServerEvent('tupdagitim:server:startJob')
                end
            else
                drawText3D(Config.StartPoint, ('[E] Tüp al (%s/%s) | [G] Mesai bitir'):format(carrying, Config.MaxCarry))
                if IsControlJustReleased(0, 38) then
                    TriggerServerEvent('tupdagitim:server:takeTube')
                elseif IsControlJustReleased(0, 47) then
                    TriggerServerEvent('tupdagitim:server:stopJob')
                end
            end
        end

        -- Teslimat noktası
        if jobActive then
            ensureDropPoint()

            local distToDrop = #(pCoords - currentDrop)
            if distToDrop < Config.MarkerDrawDistance then
                DrawMarker(1, currentDrop.x, currentDrop.y, currentDrop.z - 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.2, 1.2, 0.4, 46, 204, 113, 115, false, false, 2, nil, nil, false)
            end

            if distToDrop < Config.InteractDistance then
                drawText3D(currentDrop, '[E] Tüp teslim et')
                if IsControlJustReleased(0, 38) then
                    TriggerServerEvent('tupdagitim:server:deliverTube')
                    currentDrop = nil
                end
            end
        end
    end
end)

RegisterNetEvent('tupdagitim:client:notify', function(msg)
    notify(msg)
end)

RegisterNetEvent('tupdagitim:client:jobStarted', function()
    jobActive = true
    carrying = 0
    currentDrop = nil
    notify('Tüp dağıtım mesaisi başladı.')
end)

RegisterNetEvent('tupdagitim:client:updateCarry', function(amount)
    carrying = amount
end)

RegisterNetEvent('tupdagitim:client:jobStopped', function()
    jobActive = false
    carrying = 0
    currentDrop = nil
end)
