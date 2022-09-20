/*
    - Hoteis
    - Atrações 
    - Restaurantes

*/
const API_BASE = 'https://uenp.fun/turismo/api';

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}


export default{
    getSecondSectionList: async () =>{
        return [            
        {
            slug: 'hoteis',
            title: 'Hoteis',
            items: await basicFetch(`/hoteis`),
        },
        {
            slug: 'restaurantes',
            title: 'Restaurantes',
            items: await basicFetch(`/restaurantes`),
        },
        {
            slug: 'atracoes',
            title: 'Atrações',
            items: await basicFetch(`/atracoes`),
        },];
    }
}