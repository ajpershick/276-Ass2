class CreateEnrolls < ActiveRecord::Migration[5.1]
  def change
    create_table :enrolls do |t|
      t.integer :student_id
      t.string :course_id
      t.float :percentage
      t.string :lettergrade

      t.timestamps
    end
  end
end
