---
title: Shared custom response from rails controller action
excerpt: This post explains my recent experience regarding the endevour of implementing...
createdAt: 2019-05-01
tags: RubyOnRails
thumbnail: https://miro.medium.com/max/1400/1*5Ldy9OI0zsj3lXCcu0fDXw.png
time: 2
---

This post explains my recent experience regarding the endevour of implementing shared custom response from multiple controller actions in Ruby On Rails.

Lets say we have a controller. Inside it lies the following actions: **action_1**, **action_2**, **action_3** and **action_4**. All of these actions would respond with custom response and for convenience the responses will be in JSON format. We need to send the same custom response from different actions, thus the response needs to be shared.

```ruby
class ExampleController < ApplicationController
  def action_1
  end

  def action_2
  end

  def action_3
  end
  
  def action_4
  end
end
```

Such scenarios my arise when:

- We need to validate some data before proceeding further.
  
- The logic of the controller depends on the value of supplied **params**. If params is not present, controller needs to respond with respective message. etc…

The following text explains all the approaches which I tried for implementation of such requirements. And why one is better that the other.

## Attempt 1

This approach uses a shared method to perform extra logic and provide a Boolean response which determines the action’s response. The logic is performed in res_n method and the response is returned from controller action.

```ruby
class ExampleController < ApplicationController
  def action_1
    if res1.eql?(false)
      render json: {message: 'Failed'}, status: 400 unless res_1
      return
    end
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_2
    if res1.eql?(false)
      render json: {message: 'Failed'}, status: 400 unless res_1
      return
    end
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_3
    if res2.eql?(false)
      render json: {message: 'Failed'}, status: 400 unless res_2
      return
    end
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_4
    if res2.eql?(false)
      render json: {message: 'Failed'}, status: 400 unless res_2
      return
    end
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end
  
  private
  
  def res_1
    # perform some operations
    (operation1_successful?) ? true : false
  end
  
  def res_2
    # perform some operations
    (operation2_successful?) ? true : false
  end
end
```

As we can see, it has a lot of code duplication. The success response may be different but the error response need to be repeated in all actions. It violates the ROR's DRY principle.

### Attempt 2

This approach minimizes the code redundancy by moving the common error response to **res_n** methods. As you may have noticed the built-in method performed? is used. This method returns true if render method has already been invoked earlier. This way we prevent render method being called multiple times. The code is more simpler and cleaner than the first approach.

```ruby
class ExampleController < ApplicationController
  def action_1
    res_1; return if performed?
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_2
    res_1; return if performed?
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_3
    res_2; return if performed?
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_4
    res_2; return if performed?
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end
  
  private
  
  def res_1
    # perform some operations
    render json: {message: 'Failed'}, status: 400 unless operation1_successful?
  end
  
  def res_2
    # perform some operations
    render json: {message: 'Failed'}, status: 400 unless operation1_successful?
  end
end
```

## Attempt 3

This approach is the best among the previous two approaches. With a lot of research on code refactoring on this scenario I stumbled on this solution. It automatically prevents **render** method being called multiple times and make code more shorter, cleaner and easier than the 2nd approach. It uses built-in controller method `before_action` . This method gets called before each time a controller’s action is executed. The control of the program never enter the action method if it is returned from `before_action` method.

```ruby
class ExampleController < ApplicationController
  before_action :res1, only: [:action_1, :action_2]
  before_action :res2, only: [:action_3, :action_4]
  
  def action_1
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_2
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_3
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end

  def action_4
    # rest of the logic....
    render json: {data: '...'}, status: 200
  end
  
  private
  
  def res_1
    # perform some operations
    render json: {message: 'Failed'}, status: 400 unless operation1_successful?
  end
  
  def res_2
    # perform some operations
    render json: {message: 'Failed'}, status: 400 unless operation1_successful?
  end
end
```

## Conclusion

In this post, I have tried to explain the problem I faced during my ROR internship. And how I manged to solve it, trying different approaches, improving each time. Although the last attempt seems to be the best one, there may be scenarios where we need to implement the techniques of former approaches too.