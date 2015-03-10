class TweetsController < ApplicationController
  def show
    @tweetsearch = Tweet.search('#fergusson')
    @tweetsearch.each do |tweet|
      puts tweet.text
    end
    @friends = Tweet.friends

  end
end
