import { NextFunction, Request, Response} from 'express'

export const worldsService = {
  getWorlds: (worldName: string): string => {
    return 'Earth'
  }
}

export default function(worldsService: { getWorlds: (worldName: string ) => string }) {
    let operations = {
      GET
    };
  
    function GET(req: Request, res: Response, next: NextFunction) {
      res.status(200).json(worldsService.getWorlds(req.query.worldName as string));
    }
  
    // NOTE: We could also use a YAML string here.
    GET.apiDoc = {
      summary: 'Returns worlds by name.',
      operationId: 'getWorlds',
      parameters: [
        {
          in: 'query',
          name: 'worldName',
          required: true,
          type: 'string'
        }
      ],
      responses: {
        200: {
          description: 'A list of worlds that match the requested name.',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/World'
            }
          }
        },
        default: {
          description: 'An error occurred',
          schema: {
            additionalProperties: true
          }
        }
      }
    };
  
    return operations;
  }