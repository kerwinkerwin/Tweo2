require 'sentimental'
require 'geocoder'

class Tweet < ActiveRecord::Base
  validates :tweet_id, uniqueness: true
  validates :user_location, presence: true
  geocoded_by :user_location
  after_validation :geocode

  @client = Twitter::REST::Client.new do |config|
    config.consumer_key            ="1Q0ffL4w10sWMRLQD4pmMrKBJ"
    config.consumer_secret         ="yrdNi68jjzNY4IRiTK77IlLPiaD2elHFkix8dUmeFCjwZW8iV4"
    config.access_token            ="2909410639-h73PjezBftrkd2yJKWG2Bb3NAmUMY8COnT7zQRL"
    config.access_token_secret     ="qwndXarujEsFLLlguMfvLWOEI4LDxAJrhA1ME8UwFGg0b"
  end

  def self.friends
    @client.friends
  end

  def self.search(query)
      Tweet.destroy_all
      @client.search(query).take(40).each do |tweet|
       Tweet.create(user_id:tweet.user.id, user_name:tweet.user.screen_name, user_location: tweet.user.location, tweet_id: tweet.id, text: tweet.text)
      end
  end

  def self.sentiment
    Sentimental.load_defaults
    Sentimental.threshold = [-1,1]
    analyzer = Sentimental.new
    Tweet.all.each do | tweet|
       tweet.update(score:analyzer.get_score(tweet.text))
    end
  end

  # def self.geocode
  #
  # end

end
