// 1
function writefullName(firstName, lastName) {
  const createDiv = document.createElement("div");
  createDiv.setAttribute("class","main-div")

  const createP1 = document.createElement("p");
  createP1.innerText = firstName;
  createP1.setAttribute("class","p1")
//   createP1.style.color = "red";
//   createP1.textDecoration = "underline";
//  


  const createP2 = document.createElement("p");
  createP2.innerText = lastName;
  createP2.setAttribute("class","p2")
//   createP2.style.fontSize = "50px";
//   createP2.style.border = "1px solid black";
  
  createDiv.append(createP1,createP2);

  document.body.append(createDiv)
}

writefullName("david", "nachmias");




// 2
const productsArr = [
  { product: "Laptop", desc: "Lenovo", price: 2000 },
  { product: "Laptop", desc: "MacBook Air", price: 3000 },
  { product: "Laptop", desc: "Asus", price: 4000 },
  { product: "Phone", desc: "iPhone", price: 4500 },
  { product: "Mouse", desc: "Logitech Mouse", price: 450 },
  { product: "Headphones", desc: "Sony WH1000-XM3", price: 1200 },
  { product: "Food", desc: "Pizza", price: 55 },
  { product: "Food", desc: "Shawarma", price: 40 },
  { product: "Drink", desc: "Soda", price: 7 },
];



function productByPrice() {
  const priceInput = document.getElementById("priceInput").value;
  const filteredByPrice = productsArr.filter(value => value.price <= priceInput);
  const mainDiv = document.getElementById("mainDiv");
  mainDiv.innerHTML = "";
  filteredByPrice.forEach(value => {
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");
      h1.innerHTML = value.product;
      h2.innerHTML = value.desc;
      h3.innerHTML = value.price;
      div.append(h1,h2,h3);
      mainDiv.append(div);
  });
}
// 3
class Drive{
  constructor(name,date,kmDriven){
      this.name = name;
      this.date = date;
      this.kmDriven = kmDriven
  }
}

let drive1 = new Drive("Eitan","8.2",25000)
let drive2 = new Drive("Mishel","13.3",5000)
let drive3 = new Drive("Noa","1.4",100000)

class Car{
  constructor(manufacturer,model){
      this.manufacturer = manufacturer;
      this.model = model;
  }

  drivesArr = []
  status = true;
  totalKm = 0;

  sumTotalKm(){
      let sum = 0;
      this.drivesArr.forEach( val => sum += val.kmDriven)
      return this.totalKm = sum
  }
  
  addNewDrive(drive){
      this.drivesArr.push(drive)
      this.status = false;
      this.totalKm += drive.kmDriven
      return this.totalKm
  }
  
}

let car1 = new Car("Toyota","Corolla")
let car2 = new Car("Honda","Civic")
let car3 = new Car("Skoda","Octavia")
let carFree = new Car("BMW","X5")


car1.addNewDrive(drive1)
car1.addNewDrive(drive2)
car2.addNewDrive(drive2)
car3.addNewDrive(drive3)

class CompanyCar{
  constructor(rental){
      this.rental = rental
  }
  allCarsArr = []

  addNewCar(car){
      this.allCarsArr.push(car)
  }
  
  highestKm(){
      let max = this.allCarsArr[0] 
      this.allCarsArr.forEach(val=>{     
          if(max.totalKm < val.totalKm){
              max = val
          }
      })
      return max
  }

  getAvailableCars(){
      this.allCarsArr.forEach(val=>{
          if(val.status == true) console.log(val)
      })
  }

  addDrive = (manufacturer,ride) =>{
      this.allCarsArr.forEach((val)=>{
          if(val.manufacturer == manufacturer){
              val.addNewDrive(ride)
              return;
          }
      })
  }


}

let company = new CompanyCar("Avis")
company.addNewCar(car1)
company.addNewCar(car2)
company.addNewCar(car3)
company.addNewCar(carFree)

let newDrive = new Drive("Rodion","2.5",70000)
company.addDrive("Honda",newDrive)
company.getAvailableCars()




