class Box extends BaseClass{
    constructor(x, y, width, height){
      super(x,y,30,40)
      this.visibility=250;
    }
    display(){
      if (this.body.speed<3) {
        super.display();
      } else {
        push();
        World.remove(world,this.body);
        this.visibility=this.visibility-3;
        tint(250,this.visibility);
        pop();
      }
      
    }
    
  };
  