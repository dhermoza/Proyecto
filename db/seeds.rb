# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.find_or_initialize_by(email: 'denise@gmail.com')
user.password = 'password'
user.password_confirmation = 'password'

garden1 = user.gardens.find_or_initialize_by(title: 'Kew Gardens', address: 'Richmond, Reino Unido')
garden2 = user.gardens.find_or_initialize_by(title: 'Singapur Botanic Gardens', address: '1 Cluny Rd, Singapore 259569')
garden3 = user.gardens.find_or_initialize_by(title: 'Jardin Botanico de Rio de Janeiro', address: 'R. Jardim Botânico, 1008 - Brasil')

user.save

nenufar = garden3.plants.find_or_initialize_by(name: 'Victoria amazonica', description: 'nenúfar; es el más grande de todos los nenúfares, nativo de las aguas poco profundas del río Amazonas')
orchid = garden3.plants.find_or_initialize_by(name: 'Tropical orchid', description: 'Las orquídeas u orquidáceas son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores')
garden1.save

p "Seeds creados"
