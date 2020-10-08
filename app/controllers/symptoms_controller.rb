class SymptomsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy] 
  #must authorize req b4 you set the symptom
  before_action :set_symptom, only: [ :update, :destroy]
  #because set_symptom references @current_user and has to be authorized before set_symptom

  # GET /symptoms
  def index
    @symptoms = Symptom.all
    render json: @symptoms
  end

  # GET /symptoms/1
  def show
    @symptom = Symptom.find(params[:id])
    render json: @symptom, include: :occurrences
  end

  # POST /symptoms
  def create
    @symptom = Symptom.new(symptom_params)
    @symptom.user = @current_user

    if @symptom.save
      render json: @symptom, status: :created
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /symptoms/1
  def update
    if @symptom.update(symptom_params)
      render json: @symptom
    else
      render json: @symptom.errors, status: :unprocessable_entity
    end
  end

  # DELETE /symptoms/1
  def destroy
    @symptom.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_symptom
      @symptom = @current_user.symptoms.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def symptom_params
      params.require(:symptom).permit(:symptom, :description, :pain_level)
    end
end
