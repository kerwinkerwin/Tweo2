class TweetsController < ApplicationController
  def show
    Tweet.search('#racism')
    Tweet.sentiment
    @tweets = Tweet.all
    render json: @tweets
  end
end
