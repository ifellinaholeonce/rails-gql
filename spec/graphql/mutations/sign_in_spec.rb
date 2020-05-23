require 'rails_helper'

module Mutations
  describe SignInMutation, type: :request do
    let!(:user) { create(:user) }
    let(:mutation) do
      %(mutation {
        sign_in {
          email
        }
      })
    end

    subject(:result) do
      RailsGqlSchema.execute(mutation).as_json
    end

    context 'user authenticates' do
      it 'returns a token' do
        expect(result).to eq 'token'
      end
    end
  end
end
