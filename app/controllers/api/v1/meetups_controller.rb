class Api::V1::MeetupsController < ApplicationController
  def index
    meetup = Meetup.all.order(created_at: :desc)
    render json: meetup
  end

  def create
    meetup = Meetup.create!(meetup_params)
    if meetup 
      render json: meetup
    else   
      render json: meetup.errors
    end
  end

  def show
    if meetup 
      render json: meetup
    else   
      render json: meetup.errors
    end
  end

  # &. -> Safe Navigation Operator, checks the value exists before calling the destroy method
  def destroy
    meetup&.destroy
    render json: { message: 'Meetup was successfully deleted' }
  end

  private 

  def meetup_params 
    params.permit(:meetup).require(:title, :address, :description, :image)
  end

  # ||= will not return undefined if the object does not exist
  def meetup 
    @meetup ||= Meetup.find(params[:id])
  end

end
