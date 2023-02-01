# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController
  def index
    # ---2) post represents all the models in BlogPost this is allows it to be referenced later in the views 
    @posts = BlogPost.all
  end

  # ---3) this is going to show the blog whose id is defined in (params[:id])
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) def new is a method thats going to create an instance of the BlogPost controller
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) BlogPost.create is going to create a post based on the parameters of the blog (:title and :content)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This line allows you to edit/change data stored by referencing the params hash 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) update is the second part to edit where it will perform the act of upadating the parameters chosen and will redirect you to the posts if the type of data entered is acceptable(valid)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This line redirects you to the all the posts once the act of deleting a post is completed 
      redirect_to blog_posts_path
    end
  end

  # ---9) private is saying that book params can only be called within this class, the are private to BlogPostsController
  private
  def blog_post_params
    # ---10) params.require is going to require that any post submitted will have both of the parameters filled out to be considered valid  
    params.require(:blog_post).permit(:title, :content)
  end
end
