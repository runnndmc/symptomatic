# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.create(username: 'admin', password: '123456')

puts "#{User.count} users created"

cough = Symptom.create(symptom: 'cough')
nausea = Symptom.create(symptom: 'nausea')
vommitting = Symptom.create(symptom: 'vommitting')
fever = Symptom.create(symptom: 'fever')
chills = Symptom.create(symptom: 'chills')

puts "#{Symptom.count} symptoms created"



