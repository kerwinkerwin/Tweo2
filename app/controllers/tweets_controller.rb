class TweetsController < ApplicationController
  def show
    Tweet.search('#racism')
    Tweet.sentiment
    # @friends = Tweet.friends
  end
end
