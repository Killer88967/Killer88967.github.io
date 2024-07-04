local frame = script.Parent.Parent
local textBox = frame.TextBox
local textLabel = frame.TextLabel
local http = game:GetService("HttpService")

local function createAndPlayMusic(id)
    -- Check if a sound named "Music" already exists
    local existingMusic = workspace:FindFirstChild("Music")
    if existingMusic then
        -- Destroy the existing sound
        existingMusic:Destroy()
    end

    -- Create a new sound
    local newMusic = Instance.new("Sound")
    newMusic.Parent = workspace
    newMusic.SoundId = "rbxassetid://"..id
    newMusic.Looped = true
    newMusic.Name = "Music"
    newMusic:Play()

    -- Get the audio info from the Roblox API
    local httpRequest = http:GetAsync("https://api.roblox.com/Marketplace/GetProductInfo?assetId="..id)
    local audioInfo = httpRequest.Body

    -- Parse the JSON response
    local json = http:JSONDecode(audioInfo)

    -- Update the text label with the audio name
    textLabel.Text = json.Info.Name
end

textBox.FocusLost:Connect(function(enterPressed)
    if enterPressed then
        createAndPlayMusic(textBox.Text)
    end
end)