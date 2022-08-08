class Api::V1::MeetupsController < ApplicationController
  before_action :set_meetup, only: [:show, :update, :destroy]

  def index
    @meetups = Meetup.all.order(created_at: :desc)
    render json: @meetups
  end

  def show   
    if @meetup
      render json: @meetup   
    else  
      render json: @meetup.errors, status: :unprocessable_entity
    end 
  end

  def create
    @meetup = Meetup.new(meetup_params)
    if @meetup.save 
      render json: @meetup
    else   
      render json: @meetup.errors, status: :unprocessable_entity
    end
  end

  def update 
    if @meetup.update(meetup_params)
      render json: @meetup
    else   
      render json: @meetup.errors, status: :unprocessable_entity
    end
  end

  # &. -> Safe Navigation Operator, checks the value exists before calling the destroy method
  def destroy
    @meetup&.destroy
    render json: { message: 'Meetup was successfully deleted' }
  end

  private   

  def set_meetup 
    @meetup = Meetup.find(params[:id])
  end

  def meetup_params 
    params.require(:meetup).permit(:title, :address, :description, :image)
  end

end
