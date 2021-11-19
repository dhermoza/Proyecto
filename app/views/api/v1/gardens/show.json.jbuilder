json.extract! @garden, :id, :title, :address
json.plants @garden.plants do |plant|
  json.extract! plant, :id, :name, :description
end
