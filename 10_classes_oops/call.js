function SetBrand(brand){
    this.brand=brand;
}
function createcar(brand,model){
    SetBrand.call(this,brand);
    this.model=model;
}
      const newcar=new createcar("Tesla", "Model S")
      console.log(newcar)