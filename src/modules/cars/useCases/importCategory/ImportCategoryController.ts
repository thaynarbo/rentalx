import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCateroryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        console.log(request);

        const importCategoryUseCase = container.resolve(ImportCateroryUseCase);

        await importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
