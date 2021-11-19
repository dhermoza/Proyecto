json.array! @gardens do |garden|
  json.extract! garden, :id, :title, :address
end
