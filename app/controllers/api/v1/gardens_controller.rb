class Api::V1::GardensController < Api::V1::BaseController
  before_action :set_garden, only: [:show]

  def index
    @gardens = policy_scope(Garden)
  end

  def show
  end

  private

  def set_garden
    @garden = Garden.find(params[:id])
    authorize @garden
  end
end
