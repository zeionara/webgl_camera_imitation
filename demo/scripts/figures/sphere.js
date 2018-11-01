var sphere = {

    get_x_z: function(radius, y_current, step, x, y, z){
        lvertices = [];

        fixed = radius * radius - y_current * y_current;

        console.log(radius);
        console.log(y_current);

        console.log('fixed : ', fixed);

        for (ix = Math.sqrt(fixed); ix >= -Math.sqrt(fixed); ix -= step){
            lvertices.push(x + ix, y_current, z - Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        for (ix = -Math.sqrt(fixed); ix <= Math.sqrt(fixed); ix += step){
            //console.log('fixed - x^2 = ', fixed - ix * ix);
            lvertices.push(x + ix, y_current, z + Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        return lvertices;
    },

    get_x_z_opp: function(radius, y_current, step, x, y, z){
        lvertices = [];

        fixed = radius * radius - y_current * y_current;

        console.log(radius);
        console.log(y_current);

        console.log('fixed : ', fixed);

        for (ix = -Math.sqrt(fixed); ix <= Math.sqrt(fixed); ix += step){
            //console.log('fixed - x^2 = ', fixed - ix * ix);
            lvertices.push(x + ix, y_current, z + Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        for (ix = Math.sqrt(fixed); ix >= -Math.sqrt(fixed); ix -= step){
            lvertices.push(x + ix, y_current, z - Math.sqrt(Math.abs(fixed - ix * ix)));
        }

        

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        

        //lvertices.push(x + Math.sqrt(fixed), y_current, z + 0);

        return lvertices;
    },

    extend_vertices_set(more_upper_vertices, upper_vertices, vertices_to_return, colors_to_return, normals_to_return, x, y, z){
        for (i = 0; i <= more_upper_vertices.length; i += 3){

                let new_vertex_index = i / 3;
                let old_vertex_index = Math.floor((i / more_upper_vertices.length) * upper_vertices.length / 3);

                vertices_to_return.push(
                    x + more_upper_vertices[new_vertex_index * 3 + 0], 
                    y + more_upper_vertices[new_vertex_index * 3 + 1], 
                    z + more_upper_vertices[new_vertex_index * 3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[new_vertex_index * 3 + 0], 
                    y + more_upper_vertices[new_vertex_index * 3 + 1], 
                    z + more_upper_vertices[new_vertex_index * 3 + 2]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                
                

                

                
                
                
                

                ///

                
                vertices_to_return.push(
                    x + upper_vertices[((old_vertex_index + 1) * 3 + 0) % upper_vertices.length], 
                    y + upper_vertices[((old_vertex_index+ 1) * 3 + 1) % upper_vertices.length], 
                    z + upper_vertices[((old_vertex_index + 1) *3 + 2) % upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[((old_vertex_index + 1) * 3 + 0) % upper_vertices.length], 
                    y + upper_vertices[((old_vertex_index+ 1) * 3 + 1) % upper_vertices.length], 
                    z + upper_vertices[((old_vertex_index + 1) *3 + 2) % upper_vertices.length]
                );

                vertices_to_return.push(
                    x + more_upper_vertices[(new_vertex_index * 3 + 3) % more_upper_vertices.length], 
                    y + more_upper_vertices[(new_vertex_index * 3 + 4) % more_upper_vertices.length], 
                    z + more_upper_vertices[(new_vertex_index * 3 + 5) % more_upper_vertices.length]
                );

                vertices_to_return.push(
                    x + upper_vertices[old_vertex_index * 3 + 0], 
                    y + upper_vertices[old_vertex_index * 3 + 1], 
                    z + upper_vertices[old_vertex_index *3 + 2]
                );

                
                
                

                //console.log(isNaN(x + upper_vertices[((old_vertex_index + 1) * 3 + 0) % upper_vertices.length]));


                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );

                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );

                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[old_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );

                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);
                colors_to_return.push(120, 20, 30);

                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
                normals_to_return.push(
                    more_upper_vertices[new_vertex_index * 3 + 0], 
                    more_upper_vertices[new_vertex_index * 3 + 1], 
                    more_upper_vertices[new_vertex_index * 3 + 0]
                );
            }
    },

	get_sphere: function(radius, x, y, z, precision){
        vertices = [];
        vertices.push(x, y - radius, z);
        vertices.push(x + radius, y, z);
        vertices.push(x, y, z + radius);
        //console.log(vertices);
        
        vertices_to_return = [];
        //upper_vertices = this.get_x_z(radius, -radius + 2, 1, 0, 0, 0);

        //console.log(upper_vertices);

        colors_to_return = [];
        normals_to_return = [];

        var step = precision * radius;
        
        /*for (i = 0; i <= upper_vertices.length; i += 3){
            vertices_to_return.push(x, y - radius, z);
            vertices_to_return.push(x + upper_vertices[i + 0], y + upper_vertices[i + 1], z + upper_vertices[i + 2]);
            vertices_to_return.push(x + upper_vertices[(i + 3) % upper_vertices.length], y + upper_vertices[(i + 4) % upper_vertices.length], z + upper_vertices[(i + 5) % upper_vertices.length]);

            colors_to_return.push(120, 20, 30);
            colors_to_return.push(120, 20, 30);
            colors_to_return.push(120, 20, 30);

            normals_to_return.push(1, 0, 0);
            normals_to_return.push(1, 0, 0);
            normals_to_return.push(1, 0, 0);
        }

        console.log(vertices_to_return);

        //vertices_to_return.push(x, y - radius, z);
        //vertices_to_return.push(x + upper_vertices[upper_vertices.length - 3], y + upper_vertices[upper_vertices.length - 2], z + upper_vertices[upper_vertices.length - 1]);
        //vertices_to_return.push(x + upper_vertices[0], y + upper_vertices[1], z + upper_vertices[2]);

        colors_to_return.push(120, 20, 30);
            colors_to_return.push(120, 20, 30);
            colors_to_return.push(120, 20, 30);

            normals_to_return.push(1, 0, 0);
            normals_to_return.push(1, 0, 0);
            normals_to_return.push(1, 0, 0);*/

        more_upper_vertices = [0, - radius, 0];//upper_vertices;

        for (delta = step; delta <= radius; delta += step){
            var upper_vertices = more_upper_vertices;
            var more_upper_vertices = this.get_x_z(radius, -radius + delta, step, 0, 0, 0);
            
            this.extend_vertices_set(more_upper_vertices, upper_vertices, vertices_to_return, colors_to_return, normals_to_return, x, y, z);
            /*vertices_to_return.forEach(function(item){
                console.log(isNaN(item));
            });*/
        }

        more_upper_vertices = [0, radius, 0];

        for (delta = -step; delta >= -radius; delta -= step){
            var upper_vertices = more_upper_vertices;
            var more_upper_vertices = this.get_x_z_opp(radius, radius + delta, step, 0, 0, 0);
            this.extend_vertices_set(more_upper_vertices, upper_vertices, vertices_to_return, colors_to_return, normals_to_return, x, y, z);
        }

        

        //most_upper_vertices = this.get_x_z(radius, -radius + 3, 1, 0, 0, 0);

        //this.extend_vertices_set(most_upper_vertices, more_upper_vertices, vertices_to_return, colors_to_return, normals_to_return, x, y, z);

        //console.log(more_upper_vertices.length);
        //console.log(upper_vertices.length);

        //for (j = 0; j <= upper_vertices.length; j += 3){
            
        //}

        

        return {geometry: vertices_to_return, colors: colors_to_return, normals: normals_to_return};

        return vertices_to_return.slice(0, 27);

        console.log(vertices_to_return);

        return vertices;
        return [
            0, 0, 0,
            100, 0, 0,
            0, 100, 0,
        ]
    }
}