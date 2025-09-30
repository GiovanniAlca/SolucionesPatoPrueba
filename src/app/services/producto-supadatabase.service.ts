import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Observable, from, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Producto {
  id: number;
  nombre: string;
  descripcion?: string;
  precio?: number;
  imagen_url?: string;
  categoria?: string;
  stock?: number;
  activo?: boolean;
  created_at?: string; // Supabase devuelve strings ISO
  updated_at?: string; // Supabase devuelve strings ISO
}

// Interface para crear/actualizar productos (sin campos auto-generados)
export interface ProductoInput {
  nombre: string;
  descripcion?: string;
  precio?: number;
  imagen_url?: string;
  categoria?: string;
  stock?: number;
  activo?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoSupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  // Método con mejor manejo de errores y tipado
  getProductos(): Observable<Producto[]> {
    return from(this.supabase.from('productos').select('*')).pipe(
      map(response => {
        if (response.error) {
          console.error('Error al obtener productos:', response.error);
          throw new Error(`Error de Supabase: ${response.error.message}`);
        }
        return response.data as Producto[];
      }),
      catchError(error => {
        console.error('Error en getProductos:', error);
        // Retorna array vacío en caso de error
        return of([]);
      })
    );
  }

  // Método original (mantenido para compatibilidad)
  async getProductosAsync(): Promise<Producto[]> {
    try {
      const { data, error } = await this.supabase.from('productos').select('*');
      
      if (error) {
        console.error('Error al obtener productos:', error);
        throw new Error(`Error de Supabase: ${error.message}`);
      }
      
      return data as Producto[] || [];
    } catch (error) {
      console.error('Error en getProductosAsync:', error);
      return [];
    }
  }

  // Método para obtener un producto específico
  async getProductoPorId(id: number): Promise<Producto | null> {
    try {
      const { data, error } = await this.supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error al obtener producto:', error);
        return null;
      }
      
      return data as Producto;
    } catch (error) {
      console.error('Error en getProductoPorId:', error);
      return null;
    }
  }

  // Método para filtrar productos por categoría
  getProductosPorCategoria(categoria: string): Observable<Producto[]> {
    return from(
      this.supabase
        .from('productos')
        .select('*')
        .eq('categoria', categoria)
    ).pipe(
      map(response => {
        if (response.error) {
          throw new Error(`Error de Supabase: ${response.error.message}`);
        }
        return response.data as Producto[];
      }),
      catchError(error => {
        console.error('Error en getProductosPorCategoria:', error);
        return of([]);
      })
    );
  }
}