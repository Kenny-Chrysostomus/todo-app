class UsersController < ApplicationController

  def signup
    @user = User.new(users_params)

    if @user.save
        login!
        render json: { status: :created, user: @user }
    else
        render json: { status: 500, statusText: @user.errors.full_messages }
    end
  end

  private

    def users_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

end