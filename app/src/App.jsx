import { useEffect, useState } from "react"
import styled from "styled-components"
import SearchResult from "./components/SearchResults/SearchResult"

 export const BASE_URL="http://localhost:9000"


function App(){

  const[data, setData] = useState(null)
  const[filterData, setFilterData] = useState(null)
  const [loading,setLoading]= useState(false)
  const [error,setError]= useState(null)
  const [selectedBtn,setSelectedBtn]=useState("all")

 
  useEffect(()=>{
    const fetchFoodData = async () => {
      setLoading(true)
    try {
      const response = await fetch(BASE_URL);
      const json = await response.json();
      setData(json);
      setFilterData(json);
      setLoading(false);

    } catch (error) {
      setError("unable to fetch data ")
    }
  };
    fetchFoodData();
  },[])
  
  const searchFood=(e)=>{
    const searchValue = e.target.value;
    
    console.log(searchValue);

    if (searchValue == ""){
      setFilterData(null)
  }

  const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood =(type)=>{
    if (type == "all"){
      setFilterData(data)
      setSelectedBtn("all")
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type)
   }
  
   const filterBtns =[
    {
      name:"All",
      type:"all",
    },
    {
      name:"Breakfast",
      type:"breakfast",
    },
    {
      name:"Lunch",
      type:"lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    },
   ]


    if (error) return <div>{error}</div>
    if (loading) return <div>{loading}</div>

  return(
    <>
     <Container>
      <TopContainer>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className="search">
          <input onChange={searchFood} placeholder="Search food..." />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtns.map((value)=>(        
        <Button 
        isSelected={selectedBtn == value.type}
        key={value.name} onClick={()=>
          filterFood(value.type)}>{value.name}
        </Button>
        ))}
    
      </FilterContainer>
    </Container>
    <SearchResult data={filterData}/>
    </>)
   

}
export default App

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const TopContainer = styled.section`
  height: 140px;
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      padding: 0 10px;
      color: white;
      height: 40px;
      font-size: 16px;
      &::placeholder{
        color: white;
      }
    }
  }

  @media (0<width<600px) {
    flex-direction: column;
    height: 120px;

  }
`

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  color: white;
`
export const Button = styled.button`
  background: ${({isSelected})=> (isSelected ? "#cb4040" : "#ea3d3d") } ;
  outline: 1px solid ${({isSelected})=> (isSelected ? "#edebeb" : "#fb5353") } ;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: #f22f2f;
  }


`

