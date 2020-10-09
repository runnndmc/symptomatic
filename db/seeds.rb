# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Symptom.destroy_all
Occurrence.destroy_all


dog = User.create!(username: 'dog', password: 'catdog')

puts "#{User.count} users created"

cough = Symptom.create!(symptom: 'cough', pain_level: 5, description:'started dry and weezing and continued for a while', user: dog)
nausea = Symptom.create!(symptom: 'nausea',pain_level: 3, description:'felt sick before eating', user: dog)
vommitting = Symptom.create!(symptom: 'vommitting', pain_level: 5, description:'after eating', user: dog)
fever = Symptom.create!(symptom: 'fever', pain_level: 4, description:'100.1', user: dog)
chills = Symptom.create!(symptom: 'chills', pain_level: 2, description:'lasted an hour or so', user: dog)

puts "#{Symptom.count} symptoms created"

first = Occurrence.create!(time: '12:13', occurrence_time: '12:13', duration: '12:40', length_lasted: "30min",user: dog, symptom: cough)
second = Occurrence.create!(time: '1:43', occurrence_time: '1:43', duration: '2:40', length_lasted: "1 hour",user: dog, symptom: nausea)
fourth = Occurrence.create!(time: '2:33', occurrence_time: '2:33', duration:' 3:40', length_lasted: "1 hour",user: dog, symptom: vommitting)
fith = Occurrence.create!(time: '1:56', occurrence_time: '1:56', duration: '3:40', length_lasted: "2 hours",user: dog, symptom: fever)
third = Occurrence.create!(time: '11:56', occurrence_time: '11:57', duration: '1:00', length_lasted: "1 min",user: dog, symptom: chills)


puts "#{Occurrence.count} occurrences created"

third.symptoms << chills 

