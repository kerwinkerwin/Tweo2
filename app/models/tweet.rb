class Tweet < ActiveRecord::Base
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
    tweets = []
    @client.search(query, result_type: "recent").take(5).each do |tweet|

      puts tweet.user.location
      puts tweet.user.id
      puts tweet.user.screen_name
      puts tweet.user.lang
    end
    tweets.each do |tweet|
      puts Twitter.user([:user]).name
    end
  end

end
