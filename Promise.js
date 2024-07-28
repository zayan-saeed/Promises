//1. Create a function fetchData that returns a Promise.

function fetchData()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            x=5
            if(x>2)
            resolve('Data fetched successfully')
            else
            reject('Failed to fetch Data')
        },2000)
    })
}

fetchData().then((res)=>{console.log(res);})

//2.  Modify the fetchData function from Question 1 to sometimes reject the Promise

function fetchData2()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('Failed to fetch Data ')
        },2000)
    })
}

fetchData2().catch((res)=>{console.log(res);})

//3. Convert the fetchData function from Question  1 to use async and await instead of .then()

async function fetchData3(){
    const result=await fetchData()
    console.log(result);
} 


fetchData3()

//4. Write a function "getCountryData" that fetches data from the public API "

function getCountryData(){
fetch('https://restcountries.com/v3.1/all').then((result)=>{
    return result.json()
})
.then((result)=>{console.log({result});
for (let i=0; i<result.length;i++){
                    const imageContainer=document.createElement('div')
                    const heading=document.createElement('h2')
                    heading.innerText=result[i].name.common
                    heading.className='population'
                    imageContainer.appendChild(heading)
                    const image = document.createElement('img')
                    image.src=result[i].flags.png
                    image.className='flags'
                    imageContainer.appendChild(image)
                    const population=document.createElement('h2')
                    population.innerText=result[i].population
                    population.className='population'
                    imageContainer.appendChild(population)

                    document.getElementById('container').appendChild(imageContainer)
    
                }
})
.catch((error)=>{
    console.log("error occured");
})
}


arr=[1,2,3,4,5,6,7]

const na=arr.map((ele)=>{return ele*3})
console.log(na);