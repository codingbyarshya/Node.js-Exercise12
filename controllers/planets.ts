import { Request, Response } from 'express';
import { planets } from '../dummyDatabase';

export const getAll = (req: Request, res: Response) => {
  res.json(planets);
};

export const getOneById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((planet) => planet.id === planetId);

  if (!planet) {
    res.status(404).json({ error: 'Planet not found' });
  } else {
    res.json(planet);
  }
};

export const create = (req: Request, res: Response) => {
  const { name, type, radius } = req.body;
  const newPlanet = {
    id: planets.length + 1,
    name,
    type,
    radius,
  };
  planets.push(newPlanet);
  res.status(201).json(newPlanet);
};

export const updateById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((planet) => planet.id === planetId);

  if (planetIndex === -1) {
    res.status(404).json({ error: 'Planet not found' });
  } else {
    const updatedPlanet = {
      id: planetId,
      ...req.body,
    };
    planets[planetIndex] = updatedPlanet;
    res.json(updatedPlanet);
  }
};

export const deleteById = (req: Request, res: Response) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((planet) => planet.id === planetId);

  if (planetIndex === -1) {
    res.status(404).json({ error: 'Planet not found' });
  } else {
    const deletedPlanet = planets.splice(planetIndex, 1)[0];
    res.json(deletedPlanet);
  }
};
