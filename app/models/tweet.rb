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
      @client.search(query).take(10).each do |tweet|
       Tweet.create(user_id:tweet.user.id, user_name:tweet.user.screen_name, user_location: tweet.user.location, tweet_id: tweet.id, text: tweet.text)
      end
      self.sentiment
  end

  def self.sentiment
    Sentimental.load_defaults
    Sentimental.threshold = [-1,1]
    analyzer = Sentimental.new
    Tweet.all.each do | tweet|
      score=analyzer.get_score(tweet.text)
      tweet.update(:score_color=>self.color(score))
      tweet.save
      tweet.update(:score=>score)
      tweet.save
    end
  end

  def self.color score
    color = ""
      if score<0
       color = "FF0000"
     elsif score == 0
       color = "0000FF"
     elsif score>0 && score<1
       color = "008080"
     elsif score >1
       color ="00FF00"
     end

     puts "**********"
     puts color
     puts "**********"
     return color
  end

end
