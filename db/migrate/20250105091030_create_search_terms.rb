class CreateSearchTerms < ActiveRecord::Migration[8.0]
  def change
    create_table :search_terms do |t|
      t.string :term, null: false

      t.timestamps
    end

    add_index :search_terms, :term
  end
end
