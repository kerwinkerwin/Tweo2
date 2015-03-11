class TweetSerializer < ActiveModel::Serializer
  attributes :id, :text, :tweet_id, :score, :latitude, :longitude, :user_id, :user_name

end
