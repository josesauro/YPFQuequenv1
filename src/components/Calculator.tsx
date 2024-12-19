import React, { useState } from 'react';

export function Calculator() {
  const [formData, setFormData] = useState({
    vehicles: '',
    liters: '',
    fuelType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-[300px] md:h-auto">
          <img
            src="/estacion.jpeg"
            alt="YPF Gas Station"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Calculator Form Section */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full">
            <h2 className="text-2xl font-bold text-center mb-6">
              Calcula tu Propuesta Personalizada
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="vehicles" className="block text-sm font-medium text-gray-700 mb-1">
                  Cantidad de vehículos
                </label>
                <input
                  type="number"
                  id="vehicles"
                  min="1"
                  value={formData.vehicles}
                  onChange={(e) => setFormData({ ...formData, vehicles: e.target.value })}
                  placeholder="Ingrese cantidad de vehículos"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#136fb7] focus:border-[#136fb7]"
                  required
                />
              </div>
              <div>
                <label htmlFor="liters" className="block text-sm font-medium text-gray-700 mb-1">
                  Cantidad de litros mensuales
                </label>
                <input
                  type="number"
                  id="liters"
                  min="1"
                  value={formData.liters}
                  onChange={(e) => setFormData({ ...formData, liters: e.target.value })}
                  placeholder="Ingrese litros mensuales"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#136fb7] focus:border-[#136fb7]"
                  required
                />
              </div>
              <div>
                <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de combustible
                </label>
                <select
                  id="fuelType"
                  value={formData.fuelType}
                  onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#136fb7] focus:border-[#136fb7]"
                  required
                >
                  <option value="">Seleccione una opción</option>
                  <option value="nafta">Nafta</option>
                  <option value="diesel">Diésel</option>
                  <option value="gnc">GNC</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#136fb7] text-white py-3 px-6 rounded-md hover:bg-[#0d5a9f] transition-colors font-semibold"
              >
                Calcular Propuesta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}