import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-advanced-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FieldsetModule,
    BrowserAnimationsModule,
    PanelModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    CardModule,
    TooltipModule,
    DialogModule,
  ],
  templateUrl: './advanced-search.component.html',
  styleUrl: './advanced-search.component.scss',
})
export class AdvancedSearchComponent {
  @Input() showDialog: boolean = false;
  @Output() advancedSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  logicalOperators = [
    {
      value: 'AND',
      label: 'All',
    },
    {
      value: 'OR',
      label: 'Any',
    },
  ];
  advancedSearchForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.advancedSearchForm = this.fb.group({
      searchGroups: this.fb.array([]),
    });
    this.addSearchGroup();
  }

  get searchGroups(): FormArray {
    return this.advancedSearchForm.get('searchGroups') as FormArray;
  }

  addSearchGroup(groupComparisonLogicalOperator?: string) {
    const newSearchGroup = this.fb.group({
      logicalOperator: ['AND', Validators.required],
      searchKeywords: this.fb.array([]),
      groupComparisonLogicalOperator: [],
    });

    if (this.searchGroups.length > 0) {
      const previousGroup = this.searchGroups.at(
        this.searchGroups.length - 1
      ) as FormGroup;

      previousGroup
        .get('groupComparisonLogicalOperator')
        ?.setValue(groupComparisonLogicalOperator);
    }

    this.searchGroups.push(newSearchGroup);
    this.addSearchKeyword(this.searchGroups.length - 1);
  }

  removeSearchGroup(index: number) {
    this.searchGroups.removeAt(index);
    const previousGroup = this.searchGroups.at(
      this.searchGroups.length - 1
    ) as FormGroup;
    previousGroup.get('groupComparisonLogicalOperator')?.setValue(null);
  }

  getSearchGroupKeywords(searchGroupIndex: number): FormArray {
    return this.searchGroups
      .at(searchGroupIndex)
      .get('searchKeywords') as FormArray;
  }

  addSearchKeyword(searchGroupIndex: number) {
    const groupControl = this.searchGroups
      .at(searchGroupIndex)
      .get('searchKeywords') as FormArray;

    groupControl.push(
      this.fb.group({
        keyword: ['', Validators.required],
      })
    );
  }

  removeSearchKeyword(searchGroupIndex: number, keywordIndex: number) {
    const groupControl = this.searchGroups
      .at(searchGroupIndex)
      .get('searchKeywords') as FormArray;

    groupControl.removeAt(keywordIndex);
  }

  onSubmit() {
    const query = this.buildSearchQueryString(this.advancedSearchForm.value);
    this.showDialog = false;
    this.advancedSearch.emit(query);
  }

  buildSearchQueryString(search: any): string {
    let queryString = '';
    const searchGroups = search.searchGroups;
    
    for (let i = 0; i < searchGroups.length; i++) {
      let groupString = '(';

      const searchGroupKeywords = searchGroups[i].searchKeywords;

      for (let j = 0; j < searchGroupKeywords.length; j++) {
        if (searchGroupKeywords[j].keyword) {
          groupString += searchGroupKeywords[j].keyword;
          if (j < searchGroupKeywords.length - 1) {
            groupString += ` ${searchGroups[i].logicalOperator} `;
          } else {
            groupString += ')';
          }
        }
      }

      if (searchGroups.length > 1) {
        if (i < searchGroups.length - 1) {
          groupString += ` ${searchGroups[i].groupComparisonLogicalOperator} `;
        }
      }
      queryString += groupString;
    }
    return queryString;
  }

  onDialogClosed() {
    this.initializeForm();
    this.dialogClosed.emit();
  }
}
