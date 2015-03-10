class TweetsController < ApplicationController
  def show
    @tweetsearch = Tweet.search('#fergusson')
    puts @tweetsearch.inspect
    @friends = Tweet.friends


  end
end
