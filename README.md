# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version :5.0.7.2

* System dependencies

* Configuration

* Database creation

## usersテーブル

| Column | Type |Options|
|--------|------|-------|
|  name  |string|null: false, unique: true|
|  email |string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :message

## users_groupsテーブル

| Column  | Type  |Options|
|---------|-------|-------|
|users_id |integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Column| Type |Options|
|------|------|-------|
| name |string|null: false|

### Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :message

## messagesテーブル

| Column | Type  |Options|
|--------|-------|-------|
|user_id |integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|  body  |string |null: false|
|  image |string |

### Association
- belongs_to :user
- belongs_to :group

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...