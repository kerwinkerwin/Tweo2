class TweetsController < ApplicationController
  def show
    p params
    Tweet.search(params[:q])
    Tweet.sentiment
    @tweets = Tweet.all
    render json: @tweets
  end

  def index
  end

end
