import {useSearchParams} from "react-router-dom";


const PaginationComponent = () => {

   const [query, setQuery]=useSearchParams({page: '1'});
//отримаю номер поточної сторінки з адресного рядка браузера і перетворюю його на число.і перша сторінка по замовчу
   let currentPage=Number(query.get('page') || 1);

    return (
        <div>
            <button  disabled={currentPage === 1}
                     onClick={() => {
                //перевіряю щод page була не менше 1 першої сторінки
                if (currentPage ){
                    setQuery({page: (--currentPage).toString()});
                }
            }}>prev</button>

            <button onClick={() => {
               if (currentPage ){
                   setQuery({page:(++currentPage).toString()});
               }
            }}>next</button>

        </div>
    );
};

export default PaginationComponent;
