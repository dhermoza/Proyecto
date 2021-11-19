class Api::V1::GardensController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [ :index, :show ]
  before_action :set_garden, only: [:show, :update, :destroy]

  def index
    @gardens = policy_scope(Garden)
  end

  def show
  end

  def update
    if @garden.update(garden_params)
      render :show
    else
      render_error
    end
  end

  def create
    @garden = Garden.new(garden_params)
    @garden.user = current_user
    authorize @garden
    if @garden.save
      render :show, status: :created
    else
      render_error
    end
  end

  def destroy
    @garden.destroy
    head :no_content
  end

  private

  def set_garden
    @garden = Garden.find(params[:id])
    authorize @garden
  end

  def garden_params
    params.require(:garden).permit(:title, :address)
  end

  def render_error
    render json: { errors: @garden.errors.full_messages}, status: :unprocessable_entity
  end
end
