class TweetsController < ApplicationController
  def show
    Tweet.search('#ferguson')
    Tweet.sentiment
    # @friends = Tweet.friends
  end
end
