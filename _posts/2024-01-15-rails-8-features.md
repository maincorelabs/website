---
layout: post
title: "Rails 8: The Evolution of Modern Web Development"
author: "Robert Kovacs"
author_github: "https://github.com/robikovacs"
author_title: "Founder at Maincore"
excerpt: "Exploring the upcoming features and improvements in Ruby on Rails 8"
---

Ruby on Rails 8 brings an exciting set of features, bug fixes, and improvements. This version builds on the foundation of Rails 7.2, introducing powerful features that make Rails development even more productive and enjoyable.

## Effortless Deployments with Kamal 2

Rails 8 makes deploying your applications simple with Kamal 2 and Thruster. With a single command (`kamal setup`), you can set up a production-ready Rails environment on a standard Linux box, making deployment both easy and cost-effective.

Key benefits include:
- Zero-downtime deployments
- HTTP/2 support
- Automated SSL with Let's Encrypt
- Gzip compression
- Easy hosting of multiple apps on a single server

## Leaner Rails Deployments with Solid Adapters

Rails 8 simplifies deployments by reducing the number of additional services needed. Three new database-backed adapters make this possible:

1. **Solid Cable**: The new default Action Cable adapter in production, eliminating the Redis dependency
2. **Solid Cache**: Uses disk storage instead of RAM for more cost-effective caching
3. **Solid Queue**: Replaces Redis for Active Job background processing

## SQLite Ready for Production

Rails 8 elevates SQLite from a development tool to a reliable production choice with improvements like:
- Full-text search and virtual tables support
- Enhanced bulk insert performance
- Better concurrency with IMMEDIATE transaction mode
- Improved error handling

## Modern Asset Pipeline with Propshaft

The new Propshaft asset pipeline replaces Sprockets, offering:
- Simpler, modern approach to asset management
- Clear asset path handling
- Efficient digest stamping for caching
- Better integration with modern JavaScript tools

## Built-in Authentication

Rails 8 introduces a complete authentication system with a single command:
```ruby
bin/rails generate authentication
```

This generates everything needed for secure, session-based authentication including:
- User and session models
- Controllers for sessions and passwords
- Password reset functionality with mailer support
- Secure database-backed sessions

Stay tuned as we continue exploring these exciting new features in Rails 8!

---

**Technologies mentioned:**
- Ruby on Rails 8
- Kamal 2
- Propshaft
- SQLite
- Solid Cache
- Solid Queue
- Solid Cable
- PostgreSQL
- MySQL

This article is based on the [official Rails 8 beta announcement](https://rubyonrails.org/2024/9/27/rails-8-beta1-no-paas-required) and [AppSignal's comprehensive overview](https://blog.appsignal.com/2024/10/07/whats-new-in-ruby-on-rails-8.html).
