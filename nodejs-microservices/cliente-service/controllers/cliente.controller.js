import Cliente from '../models/Cliente.js';

export const createCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await cliente.update(req.body);
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ error: 'Cliente não encontrado' });
    }
    await cliente.destroy();
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
