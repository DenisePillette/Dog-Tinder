class DogsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    dogs = Dog.all
    render json: dogs
  end

  def create
    dog = Dog.create(dog_params)
    if dog.valid?
    render json: dog
   else
     render json: dog.errors, status: :unprocessable_entity
   end
  end

  private

  # Handle strong parameters, so we are secure
  def dog_params
    params.require(:dog).permit(:name, :age, :enjoys, :image)
  end


end
