class TweetsController < ApplicationController
  def show
    Tweet.search(params[:q])
    @tweets = Tweet.all.map do |tweet|
      [tweet.latitude, tweet.longitude,tweet.score_color, tweet.score, tweet.text]
    end
    puts @tweets
    render json: @tweets
  end

  def index
  end

end
