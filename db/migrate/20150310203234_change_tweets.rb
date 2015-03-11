class ChangeTweets < ActiveRecord::Migration
  def change
    change_table :tweets do |t|
      t.integer :user_id
      t.string :user_name
      t.string :text
      t.string :user_location
      t.float :latitude
      t.float :longitude
      t.integer :tweet_id
      t.integer :score
    end
  end
end
