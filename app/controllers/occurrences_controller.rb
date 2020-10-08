class OccurrencesController < ApplicationController
  before_action :set_occurrence, only: [:show, :update, :destroy]

  # GET /occurrences
  def index
    @occurrences = Occurrence.all

    render json: @occurrences
  end

  # GET /occurrences/1
  def show
    render json: @occurrence
  end

  # POST /occurrences
  def create
    @occurrence = Occurrence.new(occurrence_params)

    if @occurrence.save
      render json: @occurrence, status: :created, location: @occurrence
    else
      render json: @occurrence.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /occurrences/1
  def update
    if @occurrence.update(occurrence_params)
      render json: @occurrence
    else
      render json: @occurrence.errors, status: :unprocessable_entity
    end
  end

  # DELETE /occurrences/1
  def destroy
    @occurrence.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_occurrence
      @occurrence = Occurrence.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def occurrence_params
      params.require(:occurrence).permit(:occurrence_time, :time, :duration, :length_lasted, :user)
    end
end
