module Api
  module V1
    class ConferencesController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(Conference.all)
      end

      def show
        respond_with(Conference.find(params[:id]))
      end

      def create
        @conference = Conference.new(conference_params)
        if @conference.save
          respond_to do |format|
            format.json { render :json => @conference }
          end
        end
      end

      def update
        @conference = Conference.find(params[:id])
        if @conference.update(conference_params)
          respond_to do |format|
            format.json { render :json => @conference }
          end
        end
      end

      def destroy
        respond_with Conference.destroy(params[:id])
      end

    private
      def conference_params
        params.require(:conference).permit(:name, :organizer, :email, :phone, :location, :description)
      end
    end
  end
end
