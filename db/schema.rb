# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_08_205354) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "occurrences", force: :cascade do |t|
    t.time "occurrence_time" #correct full date 
    t.string "time"
    t.time "duration" 
    t.string "length_lasted"
    t.bigint "symptom_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["symptom_id"], name: "index_occurrences_on_symptom_id"
    t.index ["user_id"], name: "index_occurrences_on_user_id"
  end

  create_table "occurrences_symptoms", id: false, force: :cascade do |t|
    t.bigint "symptom_id", null: false
    t.bigint "occurrence_id", null: false
  end

  create_table "symptoms", force: :cascade do |t|
    t.string "symptom"
    t.text "description"
    t.integer "pain_level"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_symptoms_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "occurrences", "symptoms"
  add_foreign_key "occurrences", "users"
  add_foreign_key "symptoms", "users"
end
