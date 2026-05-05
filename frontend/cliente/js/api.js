const API_URL = "http://localhost:3000/servicos";

async function getServicos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar serviços');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na API:', error);
    return [];
  }
}